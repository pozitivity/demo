package ru.tatiana.demo.model;

import java.util.List;

/**
 * Created by tatiana.gorbunova on 30.11.2016.
 */
public class PagingList<T> {
    private List<T> list;
    private Long total;

    public PagingList(List<T> list, Long total) {
        this.list = list;
        this.total = total;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }
}
