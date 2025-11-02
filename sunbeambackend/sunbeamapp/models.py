

# -------------------------
# User Manager
# -------------------------
# class CustomUserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError("Email must be provided")
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email, password, **extra_fields):
#         extra_fields.setdefault("role", "superuser")
#         extra_fields.setdefault("is_staff", True)
#         extra_fields.setdefault("is_superuser", True)
#         extra_fields.setdefault("is_active", True)
#         if extra_fields.get("is_staff") is not True:
#             raise ValueError("Superuser must have is_staff=True.")
#         if extra_fields.get("is_superuser") is not True:
#             raise ValueError("Superuser must have is_superuser=True.")
#         return self.create_user(email, password, **extra_fields)


# # -------------------------
# # Custom User
# # -------------------------
# class User(AbstractBaseUser, PermissionsMixin):
#     ROLE_CHOICES = (
#         ('client', 'Client'),
#         ('staff', 'Staff'),
#         ('superuser', 'Superuser'),
#     )
#     email = models.EmailField(unique=True)
#     phone_number = models.CharField(max_length=20, blank=True, null=True)
#     company_name = models.CharField(max_length=255, blank=True, null=True)
#     is_staff = models.BooleanField(default=False)
#     is_active = models.BooleanField(default=True)
#     date_joined = models.DateTimeField(default=timezone.now)
#     role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='client')


#     objects = CustomUserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []  # no other fields required

#     def __str__(self):
#         return self.email


#     def save(self, *args, **kwargs):
#     # Sync Django flags with role only
#         if self.role == 'superuser':
#             self.is_superuser = True
#             self.is_staff = True
#         elif self.role == 'staff':
#             self.is_superuser = False
#             self.is_staff = True
#         else:  # client
#             self.is_superuser = False
#             self.is_staff = False
#         super().save(*args, **kwargs)





# # -------------------------
# # Category: High-level classification
# # -------------------------
# class Category(models.Model):
#     # CHOICES=["General purpose printing",
#     #          "Short-Run Jobs",
#     #          "Corporate & Commercial Printing",
#     #          "Event & Promotional Materials",
#     #          "Custom Printing Solutions",
#     #          ""]
#     name = models.CharField(max_length=150, unique=True)
#     description = models.TextField(blank=True)

#     def __str__(self):
#         return self.name




# # -------------------------
# # Item: Specific printing item (Brochure, Book, Poster, etc.)
# # -------------------------
# class Item(models.Model):
#     '''Base master list of all the items available'''
#     # CHOICES=[
#     #     "brochures", "books", "posters", "catalogs",  "marketing materials", 
#     #     "reports", "flyers", "invitations",  "business", "documents",
#     #     "Business cards", "letterheads", "envelopes", "folders", "certificates",  "office stationery",
#     #     "Banners", "standees", "pamphlets", "calendars", "product packaging", "labels",  "tags"
#     #     "Tailored printing events", "campaigns", "exhibitions",  "product launches"

#     # ]
#     categories = models.ManyToManyField(Category, related_name='items')
#     name = models.CharField(max_length=150)
#     description = models.TextField(blank=True)
#     base_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     custom_request = models.TextField(blank=True)

#     def __str__(self):
#         return self.name




# # -------------------------
# # Service: Add-on processes (Lamination, Binding, etc.)
# # -------------------------
# class Service(models.Model):
#     # CHOICES=[
#     #     "End-to-End services",
#     #     "Lamination",
#     #     "Perfect Binding",
#     #     "Spiral Binding",
#     #     "Saddle Stitching",
#     #     "Die-Cutting",
#     #     "UV coating"
#     #     ]
#     name = models.CharField(max_length=150, unique=True)
#     items = models.ManyToManyField(Item, related_name='services', blank=True)
#     description = models.TextField(blank=True)

#     def __str__(self):
#         return self.name




# # -------------------------
# # Enquiry: Customer’s request for a print job
# # -------------------------
# class Enquiry(models.Model):

#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='enquiries')
#     category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='enquiries')
#     item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='enquiries')
#     quantity = models.PositiveIntegerField(default=1)
#     custom_requirements = models.TextField(blank=True)
#     services = models.ManyToManyField(Service, blank=True, related_name='enquiries')
#     submitted_at = models.DateTimeField(auto_now_add=True)


#     def __str__(self):
#         return f"{self.item.name} (x{self.quantity}) for User {self.user}"





# # -------------------------
# # Design File (client/staff uploads)
# # -------------------------
# class DesignFile(models.Model):
#     enquiry = models.ForeignKey(Enquiry, on_delete=models.CASCADE, related_name='design_files')
#     file = models.FileField(upload_to='designs/')
#     uploaded_at = models.DateTimeField(auto_now_add=True)
#     is_client_upload = models.BooleanField(default=True)


# class PrintingTag(models.Model):
#     tag_name = models.CharField(max_length=150, unique=True)
#     items = models.ManyToManyField(Item, related_name='tags')
#     services = models.ManyToManyField(Service, related_name='tags')


