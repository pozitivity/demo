package ru.tatyana.demo.database;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import org.apache.commons.dbcp.BasicDataSource;

import javax.sql.DataSource;


/**
 * Created by tatiana.gorbunova on 01.12.2016.
 */
@EnableTransactionManagement
@Configuration
public class JdbcConfiguration {

    @Bean(destroyMethod = "close")
    @Scope("singleton")
    public BasicDataSource dataSource(JdbcProperties properties, FlywayProperties flywayProperties) {
        BasicDataSource dataSource = new BasicDataSource();

        dataSource.setDriverClassName(properties.getDriverClassName());
        dataSource.setUrl(properties.getUrl());
        dataSource.setUsername(properties.getUsername());
        dataSource.setPassword(properties.getPassword());

        dataSource.setDefaultAutoCommit(false);

//        DatabaseMigrator dbMigrator = new DatabaseMigrator(dataSource);
//        dbMigrator.migrate(flywayProperties.getAutoUpdate());

        return dataSource;
    }

    @Bean
    @Scope("singleton")
    public DataSourceTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}
