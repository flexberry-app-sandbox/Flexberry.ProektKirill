package Proekt_kirill.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_kirill.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Пользователь
 */
@Entity(name = "IISProekt_kirillПользователь")
@Table(schema = "public", name = "Пользователь")
public class Polzovatel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "НомерТелефона")
    private Integer номертелефона;


    public Polzovatel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(Integer номертелефона) {
      this.номертелефона = номертелефона;
    }


}