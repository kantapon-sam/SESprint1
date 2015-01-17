package sut.ac.th.society.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sut.ac.th.society.domain.Rule;
import sut.ac.th.society.repository.RulesRepository;


@RestController
public class RuleController {
	@Autowired
	private RulesRepository repo;
	
	@RequestMapping("/rule/add")
	@ResponseBody
	public String add(@Valid @RequestBody Rule rules){
		repo.save(rules);
		return "Add OK";
	}
	
	@RequestMapping("/rule/list")
	@ResponseBody
	public List<Rule> listRule(){
		return (List<Rule>) repo.findAll();
	}
	
	@RequestMapping("/rule/{id}")
	@ResponseBody
	public Rule listByid(@PathVariable("id") Long id){
		return repo.findOne(id);
	}
	
	@RequestMapping("/rule/delete/{id}")
	@ResponseBody
	public String deleteByid(@PathVariable("id") Long id){
		repo.delete(id);
		return "delete OK";
	}
}
