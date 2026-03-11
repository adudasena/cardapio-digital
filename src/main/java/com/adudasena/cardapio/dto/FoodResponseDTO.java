package com.adudasena.cardapio.dto;

import com.adudasena.cardapio.model.Food;

public record FoodResponseDTO(Long id, String title, Integer price) {
    public FoodResponseDTO (Food food) {
        this (food.getId(), food.getTitle(), food.getPrice());
    }
}
