
package io.github.rsalgadoc.tasks.backend.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import io.github.rsalgadoc.tasks.backend.entities.Task;

@RepositoryRestResource(path = "tasks", collectionResourceRel = "tasks")
public interface TaskRepository extends ListCrudRepository<Task, Long> {

}