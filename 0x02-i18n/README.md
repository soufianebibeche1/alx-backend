# Internationalization (i18n) with Flask

## Description
This project focuses on implementing internationalization (i18n) in a Flask web application. You will learn how to parametrize Flask templates to support multiple languages, infer the correct locale based on URL parameters, user settings, or request headers, and localize timestamps using `pytz`.

## Learning Objectives
- Understand how to parametrize Flask templates to display different languages.
- Learn to infer the correct locale from URL parameters, user settings, or request headers.
- Gain the ability to localize timestamps effectively.

## Requirements
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3 (version 3.7).
- All files should end with a new line.
- A `README.md` file, at the root of the project folder, is mandatory.
- Your code should adhere to the `pycodestyle` style (version 2.5).
- The first line of all your files should be exactly `#!/usr/bin/env python3`.
- All your `.py` files should be executable.
- All your modules should have documentation (`python3 -c 'print(__import__("my_module").__doc__)`).
- All your classes should have documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)`).
- All your functions and methods should have documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)`).
- Documentation should be descriptive, providing a real sentence explaining the purpose of the module, class, or method.
- All functions and coroutines must be type-annotated.

## Resources
- [Flask-Babel](https://flask-babel.tkte.ch/)
- [Flask i18n tutorial](https://exploreflask.com/en/latest/i18n.html)
- [pytz](http://pytz.sourceforge.net/)

## Project Setup
1. Install required packages:
    ```sh
    pip install Flask Flask-Babel pytz
    ```

2. Create a Flask application:
    ```python
    #!/usr/bin/env python3
    from flask import Flask, request, render_template
    from flask_babel import Babel, _

    app = Flask(__name__)
    babel = Babel(app)

    @babel.localeselector
    def get_locale():
        return request.accept_languages.best_match(['en', 'es', 'fr'])

    @app.route('/')
    def index():
        return render_template('index.html')

    if __name__ == "__main__":
        app.run(debug=True)
    ```

3. Set up templates for different languages in `templates` folder:
    ```html
    <!-- templates/index.html -->
    <!doctype html>
    <html lang="{{ g.get_locale }}">
    <head>
        <meta charset="utf-8">
        <title>{{ _("Hello, World!") }}</title>
    </head>
    <body>
        <h1>{{ _("Welcome to our site!") }}</h1>
    </body>
    </html>
    ```

4. Create message catalogs for each supported language:
    ```sh
    pybabel extract -F babel.cfg -o messages.pot .
    pybabel init -i messages.pot -d translations -l es
    pybabel init -i messages.pot -d translations -l fr
    ```

5. Add translations to the message catalogs and compile them:
    ```sh
    pybabel compile -d translations
    ```

6. Localize timestamps using `pytz`:
    ```python
    from datetime import datetime
    import pytz

    @app.template_filter('datetime')
    def format_datetime(value, format='%Y-%m-%d %H:%M:%S'):
        tz = pytz.timezone('Europe/Madrid')
        return value.astimezone(tz).strftime(format)
    ```

## Usage
- Start the Flask application:
    ```sh
    ./app.py
    ```
- Access the application in your browser and change the language settings to see the internationalization in action.

## Manual QA Review
- Ensure that you request a manual QA review once the project is complete.

## Auto Review
- An auto review will be launched at the deadline.

## Conclusion
This project will enhance your understanding of internationalization in Flask, allowing you to create web applications that support multiple languages and localized content.

---

Feel free to reach out if you have any questions or need further assistance!

