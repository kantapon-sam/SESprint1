package sut.ac.th.society.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sut.ac.th.society.domain.Project;
import sut.ac.th.society.repository.ProjectRepository;

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectRepository testRepo;
	@RequestMapping("/test/add")
	@ResponseBody
	public String testadd(@Valid @RequestBody Project money){
		testRepo.save(money);
		return "Add OK";
	}

}
