interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Team Member'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage bookings.', 'Leave reviews.', 'View cars.', 'View companies.'],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage car details', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/361545b1-5501-4843-b885-b90143cf1e09',
};
