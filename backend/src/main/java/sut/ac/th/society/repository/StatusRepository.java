package sut.ac.th.society.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import sut.ac.th.society.domain.Comment;



@Repository
public interface StatusRepository extends CrudRepository<Comment, Long>{

}
