package ru.tatiana.demo.model;

import java.util.Map;

/**
 * Created by Tatyana on 24.05.2017.
 */
public class Score {
    private Long id;
    private Long districtId;
    private Long indicatorId;
    private Map<Long, Value> valueByYear;

    public Score() {}

    public Score(Long id, Long districtId, Long indicatorId, Map<Long, Value> valueByYear) {
        this.id = id;
        this.districtId = districtId;
        this.indicatorId = indicatorId;
        this.valueByYear = valueByYear;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDistrictId() {
        return districtId;
    }

    public void setDistrictId(Long districtId) {
        this.districtId = districtId;
    }

    public Long getIndicatorId() {
        return indicatorId;
    }

    public void setIndicatorId(Long indicatorId) {
        this.indicatorId = indicatorId;
    }

    public Map<Long, Value> getValueByYear() {
        return valueByYear;
    }

    public void setValueByYear(Map<Long, Value> valueByYear) {
        this.valueByYear = valueByYear;
    }

    public static class Value {
        Float value;
        Float score;

        public Value() {}

        public Value(Float value, Float score) {
            this.value = value;
            this.score = score;
        }

        public Float getValue() {
            return value;
        }

        public void setValue(Float value) {
            this.value = value;
        }

        public Float getScore() {
            return score;
        }

        public void setScore(Float score) {
            this.score = score;
        }
    }
}
