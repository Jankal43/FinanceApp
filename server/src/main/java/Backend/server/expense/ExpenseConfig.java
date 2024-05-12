package Backend.server.expense;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ExpenseConfig {
    @Bean
    CommandLineRunner commandLineRunner(ExpenseRepository expenseRepository) {
        return args -> {
//            List<Tag> tags = List.of(
//                    new Tag("🍔", "Food"),
//                    new Tag("🚗", "Transportation"),
//                    new Tag("📚", "Education"),
//                    new Tag("💰", "Savings"),
//                    new Tag("✈️", "Travel"),
//                    new Tag("🎁", "Gifts"),
//                    new Tag("🛒", "Shopping"),
//                    new Tag("🎉", "Entertainment"),
//                    new Tag("💡", "Utilities"),
//                    new Tag("🛠️", "Home improvement")
//            );
//            tagRepository.saveAll(tags);
        };
    }
}
