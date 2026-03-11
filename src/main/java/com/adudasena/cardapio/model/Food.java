package com.adudasena.cardapio.model;
import com.adudasena.cardapio.dto.FoodRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "food")
@Entity(name = "food")
@Getter //gerar get de cada atributo
@NoArgsConstructor //declarar construtor que não recebe nenhum arg
@AllArgsConstructor //declarar construtor que recebe todos
@EqualsAndHashCode(of = "id") //indica que id é representação única do food
public class Food {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    private Integer price;

    public Food(FoodRequestDTO data) { //construtor
        this.image= data.image();
        this.price= data.price();
        this.title= data.title();
    }
}
