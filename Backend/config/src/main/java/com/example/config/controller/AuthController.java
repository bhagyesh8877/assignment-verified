package com.example.config.controller;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
public class AuthController {
    private final WebClient webClient;

    public AuthController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    @PostMapping("/api/token")
    public ResponseEntity<?> getToken(@RequestBody Map<String, String> body) {
        String code = body.get("code");

        Mono<Map> tokenResponse = webClient.post()
                .uri("https://auth.moneyhub.co.uk/token")
                .header("Content-Type", "application/x-www-form-urlencoded")
                .bodyValue("grant_type=authorization_code&code=" + code +
                        "&redirect_uri=http://localhost:3000/callback" +
                        "&client_id=YOUR_CLIENT_ID" +
                        "&client_secret=YOUR_CLIENT_SECRET")
                .retrieve()
                .bodyToMono(Map.class);

        return ResponseEntity.ok(tokenResponse.block());
    }
}
