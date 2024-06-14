package com.example.config.controller;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
public class AccountController {

    private final WebClient webClient;

    public AccountController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    @GetMapping("/api/account")
    public ResponseEntity<?> getAccount(@RequestHeader("Authorization") String authHeader) {
        String accessToken = authHeader.replace("Bearer ", "");

        Mono<Map> accountResponse = webClient.get()
                .uri("https://api.moneyhub.co.uk/v2.0/accounts")
                .header("Authorization", "Bearer " + accessToken)
                .retrieve()
                .bodyToMono(Map.class);

        return ResponseEntity.ok(accountResponse.block());
    }
}