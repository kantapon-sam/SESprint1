package sut.ac.th.society.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import sut.ac.th.society.domain.User;
import sut.ac.th.society.repository.UserRepository;

@RestController
public class LoginController {
	@Autowired
	private UserRepository 	userRepo;
	@RequestMapping("/user/login/{us}/{pw}")
	@ResponseBody
	public User login(@PathVariable("us") String userName, @PathVariable("pw") String passWord) {
		User user = userRepo.findByUserNameAndPassWord(userName , passWord);
		return user;
	}
}