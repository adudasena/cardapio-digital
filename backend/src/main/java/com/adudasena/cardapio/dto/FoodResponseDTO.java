package com.adudasena.cardapio.dto;

import com.adudasena.cardapio.model.Food;

// Adicionamos o String image aqui no molde do record
public record FoodResponseDTO(Long id, String title, String image, Integer price) {
    public FoodResponseDTO (Food food) {
        // E passamos o food.getImage() para o construtor
        this (food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}