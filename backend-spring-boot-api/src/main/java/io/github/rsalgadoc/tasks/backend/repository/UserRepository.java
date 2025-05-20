package io.github.rsalgadoc.tasks.backend.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import io.github.rsalgadoc.tasks.backend.entities.User;

@RepositoryRestResource(path = "users", collectionResourceRel = "users")
public interface UserRepository extends ListCrudRepository<User, Long> {
	User findByEmail(String email);

}