package io.github.rsalgadoc.tasks.backend.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import io.github.rsalgadoc.tasks.backend.entities.TaskState;

@RepositoryRestResource(path = "taskStates", collectionResourceRel = "taskStates")
public interface TaskStateRepository extends ListCrudRepository<TaskState, Long> {

}