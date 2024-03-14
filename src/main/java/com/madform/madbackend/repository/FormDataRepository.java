package com.madform.madbackend.repository;

import com.madform.madbackend.model.FormData;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormDataRepository extends CrudRepository<FormData, Long> {
}
