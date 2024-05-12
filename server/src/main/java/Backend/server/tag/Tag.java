package Backend.server.tag;

import jakarta.persistence.*;

@Entity
@Table(name = "tag")
public class Tag {
    @Id
    @SequenceGenerator(name = "tag_sequance", sequenceName = "tag_sequance", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tag_sequance")
    private int id;

    private String emoji;
    private String description;

    public Tag(String emoji, String description) {
        this.emoji = emoji;
        this.description = description;
    }


    public Tag() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmoji() {
        return emoji;
    }

    public void setEmoji(String emoji) {
        this.emoji = emoji;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
