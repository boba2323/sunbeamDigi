

# -------------------------
# Custom User Admin
# -------------------------
# @admin.register(User)
# class UserAdmin(BaseUserAdmin):
#     list_display = ('email', 'role', 'company_name', 'is_staff', 'is_active', 'date_joined')
#     list_filter = ('role', 'is_staff', 'is_active', 'date_joined')
#     search_fields = ('email', 'company_name', 'phone_number')
#     ordering = ('-date_joined',)
    
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal Info', {'fields': ('phone_number', 'company_name')}),
#         ('Permissions', {'fields': ('role', 'is_staff', 'is_active', 'is_superuser')}),
#         ('Important dates', {'fields': ('last_login', 'date_joined')}),
#     )
    
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'password1', 'password2', 'role', 'is_staff', 'is_active'),
#         }),
#     )
    
#     readonly_fields = ('date_joined', 'last_login')


# # -------------------------
# # Category Admin
# # -------------------------
# @admin.register(Category)
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description')
#     search_fields = ('name',)


# # -------------------------
# # Item Admin
# # -------------------------
# @admin.register(Item)
# class ItemAdmin(admin.ModelAdmin):
#     list_display = ('name', 'base_price', 'get_categories')
#     list_filter = ('categories',)
#     search_fields = ('name', 'description')
#     filter_horizontal = ('categories',)
    
#     def get_categories(self, obj):
#         return ", ".join([cat.name for cat in obj.categories.all()])
#     get_categories.short_description = 'Categories'


# # -------------------------
# # Service Admin
# # -------------------------
# @admin.register(Service)
# class ServiceAdmin(admin.ModelAdmin):
#     list_display = ('name', 'get_items_count')
#     search_fields = ('name', 'description')
#     filter_horizontal = ('items',)
    
#     def get_items_count(self, obj):
#         return obj.items.count()
#     get_items_count.short_description = 'Number of Items'


# # -------------------------
# # Design File Inline (for Enquiry)
# # -------------------------
# class DesignFileInline(admin.TabularInline):
#     model = DesignFile
#     extra = 1
#     fields = ('file', 'is_client_upload', 'uploaded_at')
#     readonly_fields = ('uploaded_at',)


# # -------------------------
# # Enquiry Admin
# # -------------------------
# @admin.register(Enquiry)
# class EnquiryAdmin(admin.ModelAdmin):
#     list_display = ('id', 'user', 'item', 'quantity', 'category', 'submitted_at')
#     list_filter = ('category', 'submitted_at', 'services')
#     search_fields = ('user__email', 'item__name', 'custom_requirements')
#     filter_horizontal = ('services',)
#     readonly_fields = ('submitted_at',)
#     inlines = [DesignFileInline]
    
#     fieldsets = (
#         ('Basic Info', {
#             'fields': ('user', 'category', 'item', 'quantity')
#         }),
#         ('Requirements', {
#             'fields': ('custom_requirements', 'services')
#         }),
#         ('Metadata', {
#             'fields': ('submitted_at',)
#         }),
#     )


# # -------------------------
# # Design File Admin
# # -------------------------
# @admin.register(DesignFile)
# class DesignFileAdmin(admin.ModelAdmin):
#     list_display = ('enquiry', 'file', 'is_client_upload', 'uploaded_at')
#     list_filter = ('is_client_upload', 'uploaded_at')
#     search_fields = ('enquiry__user__email',)
#     readonly_fields = ('uploaded_at',)


# # -------------------------
# # Printing Tag Admin
# # -------------------------
# @admin.register(PrintingTag)
# class PrintingTagAdmin(admin.ModelAdmin):
#     list_display = ('tag_name', 'get_items_count', 'get_services_count')
#     search_fields = ('tag_name',)
#     filter_horizontal = ('items', 'services')
    
#     def get_items_count(self, obj):
#         return obj.items.count()
#     get_items_count.short_description = 'Items'
    
#     def get_services_count(self, obj):
#         return obj.services.count()
#     get_services_count.short_description = 'Services'