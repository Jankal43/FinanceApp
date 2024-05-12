package Backend.server.expense;

import Backend.server.tag.Tag;
import jakarta.persistence.*;

import java.util.Date;
@Entity
public class Expense {
    @Id
    @SequenceGenerator(name = "expense_sequance", sequenceName = "expense_sequance", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "expense_sequance")
    private int id;
    @ManyToOne
    private Tag tag;

    private Date date;
    private Float moneySpend;
}
