package ru.tatiana.demo.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.tatiana.demo.procedure.dataFile.GetListDataFileProcedure;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.procedure.dataFile.DeleteDataFileProcedure;
import ru.tatiana.demo.procedure.dataFile.GetDataFileProcedure;
import ru.tatiana.demo.procedure.dataFile.SaveDataFileProcedure;

import javax.sql.DataSource;
import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
@Repository
@Transactional
public class DataFileRepository {
    private GetDataFileProcedure getDataFileProcedure;
    private GetListDataFileProcedure getListDataFileProcedure;
    private SaveDataFileProcedure saveDataFileProcedure;
    private DeleteDataFileProcedure deleteDataFileProcedure;

    @Autowired
    public void initialise(DataSource dataSource) {
        getDataFileProcedure = new GetDataFileProcedure(dataSource);
        getListDataFileProcedure = new GetListDataFileProcedure(dataSource);
        saveDataFileProcedure = new SaveDataFileProcedure(dataSource);
        deleteDataFileProcedure = new DeleteDataFileProcedure(dataSource);
    }

    @Transactional
    public List<DataFile> getListDataFile(Integer offset, Integer pageSize) {
        return getListDataFileProcedure.execute(offset, pageSize);
    }

    @Transactional
    public DataFile getDataFileById(Long id) {
        return getDataFileProcedure.execute(id);
    }

    @Transactional
    public DataFile saveDataFile(Long id, String content, Boolean used, String name, Long size, String headers) {
        return saveDataFileProcedure.execute(id, content, used, name, size, headers);
    }

    @Transactional
    public void deleteDataFile(Long id) {
        deleteDataFileProcedure.execute(id);
    }

}
