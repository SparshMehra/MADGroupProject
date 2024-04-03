package com.madform.madbackend.repository;

import com.madform.madbackend.model.FormData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

// Repository is an interface that extends CrudRepository which is used to
// perform CRUD(Create, Read, Update, Delete) operations on the database
@Repository
public interface FormDataRepository extends CrudRepository<FormData, Long> {
}
