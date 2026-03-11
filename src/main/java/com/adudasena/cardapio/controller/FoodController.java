package com.adudasena.cardapio.controller;

import com.adudasena.cardapio.dto.FoodResponseDTO;
import com.adudasena.cardapio.model.Food;
import com.adudasena.cardapio.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {

    //instanciação, injeção de dependência
    @Autowired
    private FoodRepository repository;

    @GetMapping
    //dto para nãor etornar direto a entidade como lista (boa prática)
    //melhor uma nova classe pra respostas e requests
    //será criado um record ao invés de uma classe, pois será só pra representação, não com métodos
    public List<FoodResponseDTO> getAll() {

        List<FoodResponseDTO> foodList= repository.findAll().stream().map(FoodResponseDTO ::new).toList(); //pega todos os dados da tabela food com o all. Stream pega tudo do repo e coloca no "funil". Pra cada objeto vindo, o map criará um dto
        return foodList;
    }
}

