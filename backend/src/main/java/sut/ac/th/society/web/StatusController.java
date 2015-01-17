package sut.ac.th.society.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sut.ac.th.society.domain.Comment;
import sut.ac.th.society.repository.StatusRepository;



@RestController
public class StatusController {
	@Autowired
	private	StatusRepository libRepo;
	
	@RequestMapping("/add")
	@ResponseBody
	public void add(@Valid @RequestBody Comment comm){
		//System.out.println(comm.getComment());
		libRepo.save(comm);
	}
	
	@RequestMapping("/add/post")
	@ResponseBody
	public List<Comment> showall(){
		return (List<Comment>) libRepo.findAll();
	}
}
