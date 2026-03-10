package com.adudasena.cardapio.repository;

import com.adudasena.cardapio.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

//se conecta ao bd e pega os dados de lá
public interface FoodRepository extends JpaRepository<Food, Long> {
}
