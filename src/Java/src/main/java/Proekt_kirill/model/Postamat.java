package Proekt_kirill.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proekt_kirill.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Постамат
 */
@Entity(name = "IISProekt_kirillПостамат")
@Table(schema = "public", name = "Постамат")
public class Postamat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Адрес")
    private String адрес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "SluzhbaDostavki")
    @Convert("SluzhbaDostavki")
    @Column(name = "СлужбаДоставки", length = 16, unique = true, nullable = false)
    private UUID _sluzhbadostavkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "SluzhbaDostavki", insertable = false, updatable = false)
    private SluzhbaDostavki sluzhbadostavki;

    @OneToMany(mappedBy = "postamat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<YAchejka> yachejkas;


    public Postamat() {
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

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }


}