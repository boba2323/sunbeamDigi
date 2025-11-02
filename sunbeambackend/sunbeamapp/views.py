# app/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .serialisers import EmailSerializer
from django.conf import settings

class SendEmailView(APIView):
    serializer_class = EmailSerializer
    def post(self, request):
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            subject = serializer.validated_data['subject']
            message = serializer.validated_data['message']
            from_email = serializer.validated_data.get('from_email', settings.DEFAULT_FROM_EMAIL)
            to = serializer.validated_data.get('to', "deadryefield@gmail.com")

            try:
                send_mail(subject, message, from_email, to)
                return Response({"success": "Email sent successfully."}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
