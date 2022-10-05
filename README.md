# Resource

[Reference Doc](https://codewithsteps.herokuapp.com)
[Html Arrow](https://www.toptal.com/designers/htmlarrows/)
[CSRF pass from js in django](https://docs.djangoproject.com/en/3.0/ref/csrf/#ajax)

## Cookies 
- Two Ways to manage Cookies:
1. Add csrf_exempt decorators in vies 
2. pass `{% csrf_token %}` in form and `getElementsByTagName('input')[0].value`  to get csrf_token 

## Project Setup
- Create a virtual environment using `virtualenv env`
- Activate the virtual environment using `source env/bin/activate` if you using mac/ubuntu in windows use `env\Scripts\activate`
- Install the requirements using `pip install -r requirements.txt`
- Copy the `.env.example` to `.env` and update the values
- Run Migrations using `python manage.py migrate`
- Create a superuser using `python manage.py createsuperuser`
- Run the server using `python manage.py runserver`

