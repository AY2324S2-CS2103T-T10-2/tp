package seedu.address.logic.commands.person;

import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.junit.jupiter.api.Test;

import seedu.address.logic.commands.CommandResult;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.AddressBook;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.person.Address;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Phone;
import seedu.address.model.tag.Tag;

import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class ImportCommandTest {
    private static final Path VALID_FILE_PATH = Paths.get("src", "test", "data",
            "RapidTracer", "patientData.csv");
    private static final Path INVALID_FILE_PATH = Paths.get("src", "test", "data",
            "RapidTracer", "nonexistent.csv");
    private static final Path WRONG_FORMAT_FILE_PATH = Paths.get("src", "test", "data",
            "RapidTracer", "missingColumnFile.csv");
    private Model model = new ModelManager(new AddressBook(), new UserPrefs());

    @Test
    public void execute_import_success() throws CommandException {
        ImportCommand importCommand = new ImportCommand(VALID_FILE_PATH);
        CommandResult commandResult = importCommand.execute(model);
        assertEquals(
                String.format("Imported patient contact from: %s", VALID_FILE_PATH), commandResult.getFeedbackToUser());
    }

    @Test
    public void execute_import_invalidPathFailure() {
        ImportCommand importCommand = new ImportCommand(INVALID_FILE_PATH);
        assertThrows(CommandException.class, () -> importCommand.execute(model));
    }

    @Test
    public void execute_import_throwsCommandException() {
        ImportCommand importCommand = new ImportCommand(WRONG_FORMAT_FILE_PATH);
        assertThrows(CommandException.class, () -> importCommand.execute(model));
    }
    @Test
    public void execute_createPersonFromMap_success() {
        Map<String, String> patientDetail = new HashMap<>();
        patientDetail.put("name", "John Doe");
        patientDetail.put("phone", "123456");
        patientDetail.put("address", "123 Main St");
        patientDetail.put("tags", "tag1; tag2");

        ImportCommand importCommand = new ImportCommand(VALID_FILE_PATH);
        Person result = importCommand.createPersonFromMap(patientDetail);

        assertNotNull(result);
        assertEquals(new Name("John Doe"), result.getName());
        assertEquals(new Phone("123456"), result.getPhone());
        assertEquals(new Address("123 Main St"), result.getAddress());
        Set<Tag> expectedTags = Set.of(new Tag("tag1"), new Tag("tag2"));
        assertEquals(expectedTags, result.getTags());
    }

    @Test
    public void execute_parseAddPersonCommand_success() throws ParseException {
        ImportCommand importCommand = new ImportCommand(VALID_FILE_PATH);
        AddPersonCommand result = importCommand.parseAddPersonCommand(" n/John Doe p/123456 a/123 Main St t/tag1 t/tag2 ");
        assertNotNull(result);
    }

    @Test
    public void execute_convertToAddPersonCommandInput_success() {
        Map<String, String> patientDetail = new HashMap<>();
        patientDetail.put("name", "John Doe");
        patientDetail.put("phone", "123456");
        patientDetail.put("address", "123 Main St");
        patientDetail.put("tags", "tag1;tag2");

        ImportCommand importCommand = new ImportCommand(VALID_FILE_PATH);
        String result = importCommand.convertToAddPersonCommandInput(patientDetail);

        String expectedOutput = " n/John Doe p/123456 a/123 Main St t/tag1 t/tag2 ";
        assertEquals(expectedOutput, result);
    }

    @Test
    public void testEquals() {
        ImportCommand importCommand1 = new ImportCommand(VALID_FILE_PATH);
        ImportCommand importCommand2 = new ImportCommand(VALID_FILE_PATH);
        ImportCommand importCommand3 = new ImportCommand(INVALID_FILE_PATH);

        assertEquals(importCommand1, importCommand2);
        assertNotEquals(importCommand1, importCommand3);
    }
}
