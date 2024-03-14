/**
 * This is the controller the backend. It is for handling the incoming and
 * outgoing requests.
 *
 * @Author: Mohammad Zaid Khan
 */

package com.madform.madbackend.controller;

import com.madform.madbackend.model.FormData;
import com.madform.madbackend.repository.FormDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FormController {

    @Autowired
    private FormDataRepository formDataRepository;

    @PostMapping("/submit")
    public String submitForm(@ModelAttribute FormData formData) {
        System.out.println(formData.toString()); // testing to see wtf im getting
        formDataRepository.save(formData);
        return "Data saved successfully!";
    }
}
