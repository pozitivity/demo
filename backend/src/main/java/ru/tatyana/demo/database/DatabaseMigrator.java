//package ru.tatyana.demo.database;
//
//import org.apache.log4j.Logger;
//import org.flywaydb.core.Flyway;
//import org.flywaydb.core.api.MigrationInfo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Scope;
//import org.springframework.stereotype.Component;
//import org.springframework.web.context.WebApplicationContext;
//
//import javax.sql.DataSource;
//import javax.annotation.PostConstruct;
//
///**
// * Created by tatiana.gorbunova on 30.11.2016.
// */
//@Component
//public class DatabaseMigrator {
//    private static final Logger LOGGER = Logger.getLogger(DatabaseMigrator.class.getName());
//
//    private final Flyway flyway;
//
//    @Autowired
//    public DatabaseMigrator(DataSource dataSource) {
//        flyway = new Flyway();
//        flyway.setDataSource(dataSource);
//    }
//
//    @PostConstruct
//    public void migrate(Boolean autoUpdate) {
//        if (autoUpdate) {
//            LOGGER.info("Flyway started");
//            System.out.println("Flyway started");
//            if (flyway.info().applied().length == 0 && flyway.info().pending().length > 0) {
//                flyway.clean();
//            }
//            flyway.setBaselineOnMigrate(true);
//            for (MigrationInfo i: flyway.info().all()) {
//                LOGGER.info("migrate task: " + i.getVersion() + " : "
//                + i.getDescription() + " from file: " + i.getScript());
//            }
//            flyway.migrate();
//        } else {
//            LOGGER.info("Flyway not started");
//        }
//    }
//}
