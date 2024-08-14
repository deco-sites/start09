import { ImageWidget } from "apps/admin/widgets.ts";
interface HelloWorldProps {
  /**
   * @format rich-text
   */
  greeting?: string;
  /**
   * @format textarea
   */
  message?: string;
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}
export default function HelloWorld({
  greeting = "Hello, World!",
  message = "Welcome to my awesome website!",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  backgroundColor = "#f0f0f0",
  textColor = "#333333"
}: HelloWorldProps) {
  return (
    <div class="flex flex-col items-center justify-center p-8 rounded-lg shadow-md" style={{ backgroundColor }}>
      <img src={image} alt="Hello World" class="w-32 h-32 mb-4 rounded-full object-cover" />
      <h1 class="text-4xl font-bold mb-2" style={{ color: textColor }}>{greeting}</h1>
      <p class="text-lg text-center" style={{ color: textColor }}>{message}</p>
    </div>
  );
}
