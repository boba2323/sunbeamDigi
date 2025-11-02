from django.urls import path
from .views import SendEmailView
urlpatterns = [
    # path("admin/", admin.site.urls),
    # path('api-auth/', include('rest_framework.urls')),
    path("contact-form/", SendEmailView.as_view() )
]
