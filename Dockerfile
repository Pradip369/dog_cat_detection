# Use an official Python runtime as the base image
FROM python:3.8.2-slim-buster

# Set the working directory in the container
WORKDIR /code

# Copy the requirements file to the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the project code to the container
COPY . .

# Expose the port where the Django application will run
EXPOSE 8000

# Set environment variables for Django
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Run Django's migrate command to apply database migrations
RUN python manage.py makemigrations
RUN python manage.py migrate

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
