package seedu.address.model.tag;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;

public class AgeGroup extends Tag {
    public final String ageGroup;
    public AgeGroup(String ageGroup) {
        super(ageGroup);
        this.ageGroup = ageGroup;
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof AgeGroup)) {
            return false;
        }

        AgeGroup otherTag = (AgeGroup) other;
        return ageGroup.equals(otherTag.ageGroup);
    }

    @Override
    public int hashCode() {
        return ageGroup.hashCode();
    }

    /**
     * Format state as text for viewing.
     */
    public String toString() {
        return '[' + ageGroup + ']';
    }
}
