package Backend.server.tag;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class TagConfig {
    @Bean
    CommandLineRunner commandLineRunner(TagRepository tagRepository) {
        return args -> {
            List<Tag> tags = List.of(
                    new Tag("🍔", "Food"),
                    new Tag("🚗", "Transportation"),
                    new Tag("📚", "Education"),
                    new Tag("💰", "Savings"),
                    new Tag("✈️", "Travel"),
                    new Tag("🎁", "Gifts"),
                    new Tag("🛒", "Shopping"),
                    new Tag("🎉", "Entertainment"),
                    new Tag("💡", "Utilities"),
                    new Tag("🛠️", "Home improvement")
            );
            tagRepository.saveAll(tags);
        };
    }
}
