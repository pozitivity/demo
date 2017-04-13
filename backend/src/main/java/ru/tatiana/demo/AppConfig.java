//package ru.tatiana.demo;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
//import org.springframework.cache.annotation.EnableCaching;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.Ordered;
//import org.springframework.core.annotation.Order;
//import org.springframework.orm.jpa.vendor.Database;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//import ru.tatiana.demo.database.DatabaseMigrator;
//import ru.tatiana.demo.database.JdbcConfiguration;
//
///**
// * Created by tatiana.gorbunova on 01.12.2016.
// */
//@Configuration
//@EnableAutoConfiguration
//@EnableTransactionManagement
//@ComponentScan(basePackages = "ru.tatiana.demo")
//@Order(Ordered.HIGHEST_PRECEDENCE)
//@EnableCaching
//public class AppConfig {
//
//    @Autowired
//    JdbcConfiguration jdbcConfiguration;
//
//    @Bean
//    public DatabaseMigrator databaseMigrator() {
//        DatabaseMigrator dbMigrator = new DatabaseMigrator(jdbcConfiguration.dataSource());
//
//    }
//}
