"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template
from FlaskWeb import app

@app.route('/')
@app.route('/index')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )

@app.route('/about-us')
def contact():
    """Renders the contact page."""
    return render_template(
        'about-us.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/item')
def about():
    """Renders the about page."""
    return render_template(
        'item.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )
