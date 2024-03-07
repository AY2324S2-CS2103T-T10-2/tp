package seedu.address.model.tag;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;

public class Disease extends Tag {
    public final String disease;
    public Disease(String disease) {
        super(disease);
        this.disease = disease;
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Disease)) {
            return false;
        }

        Disease otherTag = (Disease) other;
        return disease.equals(otherTag.disease);
    }

    @Override
    public int hashCode() {
        return disease.hashCode();
    }

    /**
     * Format state as text for viewing.
     */
    public String toString() {
        return '[' + disease + ']';
    }
}