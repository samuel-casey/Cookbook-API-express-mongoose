| **URL**     | **HTTP Verb** | **Action** | **Description**             |
| ----------- | ------------- | -------------- | ---------------------- |
| /api/cookbooks     | GET           |    index            | get all cookbooks        |
| /api/cookbooks/addCookbook/     | POST          |    create            | create a new fruit     |
| /api/cookbooks/book  | GET           |    show            | get a single cookbook by title if title passed in body, get a single cookbook by year if cookbook passed in body, get it by both if both passed in body     |
| / | PUT           |    update            | update a single fruit  |
| / | DELETE        |    destroy            | destroy a single fruit |