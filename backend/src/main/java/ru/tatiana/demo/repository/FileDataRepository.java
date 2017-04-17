package ru.tatiana.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.tatiana.demo.procedure.fileData.GetListFileDataProcedure;
import ru.tatiana.demo.model.DataFile;
import ru.tatiana.demo.procedure.fileData.DeleteFileDataProcedure;
import ru.tatiana.demo.procedure.fileData.GetFileDataProcedure;
import ru.tatiana.demo.procedure.fileData.SaveFileDataProcedure;

import javax.sql.DataSource;
import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Tatyana on 11.04.2017.
 */
@Repository
@Transactional
public class FileDataRepository {
    private GetFileDataProcedure getFileDataProcedure;
    private GetListFileDataProcedure getListFileDataProcedure;
    private SaveFileDataProcedure saveFileDataProcedure;
    private DeleteFileDataProcedure deleteFileDataProcedure;

    @Autowired
    public void initialise(DataSource dataSource) {
        getFileDataProcedure = new GetFileDataProcedure(dataSource);
        getListFileDataProcedure = new GetListFileDataProcedure(dataSource);
        saveFileDataProcedure = new SaveFileDataProcedure(dataSource);
        deleteFileDataProcedure = new DeleteFileDataProcedure(dataSource);
    }

    @Transactional
    public List<DataFile> getListFileData(Integer offset, Integer pageSize) {
        return getListFileDataProcedure.execute(offset, pageSize);
    }

    @Transactional
    public DataFile getFileDataById(Long id) {
        return getFileDataProcedure.execute(id);
    }

    @Transactional
    public Long saveFileData(Long id, String content, Boolean used, String name) {
        return saveFileDataProcedure.execute(id, content, used, name);
    }

    @Transactional
    public void deleteSaveFile(Long id) {
        deleteFileDataProcedure.execute(id);
    }

}
