import { objectIdType } from "@factor/post/util"
import { addFilter, pushToFilter } from "@factor/tools"
import { FactorPost } from "@factor/post/types"

export const setup = (): void => {
  pushToFilter("post-edit-components", {
    name: "SEO and Sharing",
    component: () => import("./seo-panel.vue")
  })

  addFilter(
    "post-schema",
    (_: FactorPost): FactorPost => {
      return {
        ..._,
        titleTag: { type: String, trim: true },
        descriptionTag: { type: String, trim: true },
        shareImage: { type: objectIdType(), ref: "attachment" }
      }
    }
  )

  pushToFilter("post-populated-fields", { field: "shareImage", depth: 20 })
}
setup()