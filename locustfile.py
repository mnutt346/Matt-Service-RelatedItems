from locust import HttpLocust, TaskSet, task

class UserBehavior(TaskSet):

    @task 
    def get_related(self):
        self.client.get("/related")

class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 50
    max_wait = 750