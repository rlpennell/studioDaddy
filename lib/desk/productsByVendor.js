import S from '@sanity/desk-tool/structure-builder';
import { studioClient } from '../utils/studioClient';

export default S.listItem()
  .title('Products by Vendor')
  .child(async () => {
    const vendors = await studioClient
      .fetch(`*[_type == 'product' && vendor_ != null].vendor_`)
      .then((allVendors) => [...new Set(allVendors)]);
    console.log(vendors);
    return S.list()
      .title('Products by Vendor')
      .items([
        ...vendors.map((vendor) =>
          S.listItem()
            .title(vendor)
            .child(
              S.documentList()
                .title(vendor)
                .filter('_type == "product" && vendor_ == $vendor')
                .params({ vendor })
            )
        ),
      ]);
  });
