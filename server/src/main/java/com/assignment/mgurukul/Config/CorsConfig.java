// package com.assignment.mgurukul.Config;

// import java.util.List;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.web.filter.CorsFilter;

// @Configuration
// public class CorsConfig {
// @Bean
// public CorsFilter corsFilter() {
// CorsConfiguration corsConfiguration = new CorsConfiguration();
// corsConfiguration.setAllowedOrigins(List.of("*"));

// corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE",
// "OPTIONS"));
// corsConfiguration.setAllowCredentials(true);
// corsConfiguration.addAllowedHeader("*");

// UrlBasedCorsConfigurationSource source = new
// UrlBasedCorsConfigurationSource();
// source.registerCorsConfiguration("/**", corsConfiguration);

// return new CorsFilter(source);
// }
// }
