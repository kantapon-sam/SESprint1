package sut.ac.th.society.repository;

import org.springframework.data.repository.CrudRepository;

import sut.ac.th.society.domain.User;

public interface UserRepository extends CrudRepository<User, Long> {
	public User findByUserNameAndPassWord(String userName, String passWord);
}