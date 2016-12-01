package ru.tatyana.demo.database;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;

/**
 * Created by tatiana.gorbunova on 01.12.2016.
 */
@Component
@ConfigurationProperties(prefix = "flyway")
public class FlywayProperties {
    @NotNull
    private Boolean autoUpdate;


    public Boolean getAutoUpdate() {
        return autoUpdate;
    }

    public void setAutoUpdate(Boolean autoUpdate) {
        this.autoUpdate = autoUpdate;
    }
}
