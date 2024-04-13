package seedu.address.logic.commands.person;

import static java.util.Objects.requireNonNull;
import static seedu.address.logic.parser.CliSyntax.PREFIX_ADDRESS;
import static seedu.address.logic.parser.CliSyntax.PREFIX_IMPORT;
import static seedu.address.logic.parser.CliSyntax.PREFIX_NAME;
import static seedu.address.logic.parser.CliSyntax.PREFIX_PHONE;
import static seedu.address.logic.parser.CliSyntax.PREFIX_TAG;

import java.io.IOException;
import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import com.opencsv.CSVParser;
import com.opencsv.CSVParserBuilder;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvException;

import seedu.address.commons.exceptions.DataLoadingException;
import seedu.address.logic.commands.Command;
import seedu.address.logic.commands.CommandResult;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.Prefix;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.logic.parser.person.AddPersonCommandParser;
import seedu.address.model.Model;
import seedu.address.model.person.Address;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Phone;
import seedu.address.model.tag.Tag;

/**
 * Import data from a csv file to the address book.
 */
public class ImportCommand extends Command {

    public static final String COMMAND_WORD = "import";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Imports patient contacts from a given csv file"
            + "Parameters: "
            + PREFIX_IMPORT + " FILEPATH...\n"
            + "Example: " + COMMAND_WORD + " "
            + PREFIX_IMPORT + "./data/PatientData.csv";

    public static final String MESSAGE_SUCCESS = "Imported patient contact from: %1$s";
    public static final String MESSAGE_LOADING_ERROR = "Import failed due to data loading error. \n"
            + "Error occurs if the csv file is not put under the data directory \n";
    public static final String MESSAGE_FORMAT_ERROR = "Import failed due to format errors in the csv file. \n"
            + "Please make sure the csv file only contains name, phone, address and tags. \n"
            + "Please make sure there are no empty entries or rows in the csv file.";
    public static final String MESSAGE_PARSE_FILE_FAILURE = "Error occurred while parsing csv file, please try again.";

    private final Path filePath;
    private final AddPersonCommandParser addPersonCommandParser = new AddPersonCommandParser();

    private final String[] fields = {"name", "phone", "address", "tags"};

    private final Map<String, Prefix> prefixMap = Map.of(
            "name", PREFIX_NAME,
            "phone", PREFIX_PHONE,
            "address", PREFIX_ADDRESS,
            "tags", PREFIX_TAG);

    /**
     * The ImportCommand object takes in a specified file.
     * @param filePath the absolute/relative path of the file
     */
    public ImportCommand(Path filePath) {
        requireNonNull(filePath);

        this.filePath = filePath;
    }

    /**
     * Adds person contact data to the address book from the csv file line by line.
     * @param model {@code Model} which the command should operate on.
     * @return CommandResult
     * @throws CommandException formatting or data loading errors will be notified.
     */
    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        try {
            List<Map<String, String>> data = readFile();
            for (Map<String, String> patientDetail : data) {
                Person person = createPersonFromMap(patientDetail);
                if (person != null && !model.hasPerson(person)) {
                    String addPersonCommandInput = convertToAddPersonCommandInput(patientDetail);
                    AddPersonCommand addPersonCommand = parseAddPersonCommand(addPersonCommandInput);
                    addPersonCommand.execute(model);
                }
            }
        } catch (IOException | CsvException exception) {
            throw new CommandException(MESSAGE_LOADING_ERROR);
        } catch (ParseException e) {
            throw new CommandException(MESSAGE_PARSE_FILE_FAILURE);
        } catch (Exception e) {
            throw new CommandException(MESSAGE_FORMAT_ERROR);
        }
        return new CommandResult(String.format(MESSAGE_SUCCESS, filePath.toString()));
    }

    /**
     * Uses OpenCSV API to read in patient data from a csv file and returns a list of maps.
     * @throws DataLoadingException notifies if error occurs
     */
    public List<Map<String, String>> readFile() throws Exception {
        Reader reader = Files.newBufferedReader(filePath);
        CSVParser parser = new CSVParserBuilder().build();
        CSVReader csvReader = new CSVReaderBuilder(reader).withCSVParser(parser).build();
        List<String[]> rows = csvReader.readAll();
        List<Map<String, String>> details = new ArrayList<>();
        String[] fields = rows.get(0);
        for (int i = 1; i < rows.size(); i++) {
            String[] row = rows.get(i);
            Map<String, String> map = new HashMap<>();
            for (int j = 0; j < fields.length; j++) {
                map.put(fields[j], row[j]);
            }
            details.add(map);
        }
        return details;
    }

    /**
     * Creates a Person object from a given line of patientDetail. The person is checked against the PersonList
     * and will be skipped if the person already exists in the list.
     * @return a person created from the list.
     */
    public Person createPersonFromMap(Map<String, String> patientDetail) throws NullPointerException {
        String nameStr = patientDetail.get("name");
        String phoneStr = patientDetail.get("phone");
        String addressStr = patientDetail.get("address");
        String tagsStr = patientDetail.get("tags");

        // Parse tags from string to set of Tag objects
        Set<Tag> tags = Arrays.stream(tagsStr.split(";"))
                .map(String::trim)
                .filter(tag -> !tag.isEmpty())
                .map(Tag::new)
                .collect(Collectors.toSet());

        // Create Name, Phone, and Address objects
        Name name = new Name(nameStr);
        Phone phone = new Phone(phoneStr);
        Address address = new Address(addressStr);

        // Create and return a new Person object
        return new Person(name, phone, address, tags);
    }
    /**
     * Converts a map of patient data to a string that can be parsed by the addPersonCommandParser
     * @param patientDetail
     * @return
     */
    public String convertToAddPersonCommandInput(Map<String, String> patientDetail) {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        for (String key : fields) {
            if (patientDetail.get(key).isEmpty()) {
                continue;
            }
            if (key.equals("tags")) {
                String tags = patientDetail.get(key);
                String[] tagSet = tags.split(";");
                for (String tagName : tagSet) {
                    sb.append(prefixMap.get(key).getPrefix());
                    sb.append(tagName);
                    sb.append(" ");
                }
            } else {
                sb.append(prefixMap.get(key).getPrefix());
                sb.append(patientDetail.get(key));
                sb.append(" ");
            }
        }
        return sb.toString();
    }

    public AddPersonCommand parseAddPersonCommand(String input) throws ParseException {
        return addPersonCommandParser.parse(input);
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof ImportCommand)) {
            return false;
        }

        ImportCommand e = (ImportCommand) other;
        return filePath.equals(e.filePath);
    }
}
