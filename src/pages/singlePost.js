import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import {
  Box,
  Image,
  Heading,
  Text,
  Divider,
  Grid,
  Flex,
} from '@chakra-ui/core';

export default function SingleBlog() {
  const breakPoints = [
    { width: 700, itemsToShow: 1, itemsToScroll: 1 },
    { width: 1000, itemsToShow: 2, itemsToScroll: 2 },
  ];
  return (
    <Box mt="100px">
      <Box mb="8" textAlign="center">
        <Text fontSize="2xl">Blog | 12th June 2020</Text>
      </Box>
      <Box mb="8" h="400px" w="100%">
        <Image
          h="400px"
          w="100%"
          objectFit="cover"
          src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/edwin-hooper-q8m8clkryeo-unsplash-900x600.jpg"
        ></Image>
      </Box>

      <Box mb="8" className="padding">
        <Text fontSize="2xl">
          لقد أوضحت أزمة COVID-19 قيود التفكير والتأهب والسياسة الحالية ليس فقط
          فيما يتعلق بالأوبئة الصحية ولكن أيضًا بتحديات الاستدامة التي نواجهها
          محليًا وعالميًا. الرأسمالية المعاصرة ، بثقافتها الفردية المفرطة ونهجها
          في الوقت المناسب - وليس فقط في حالة - للبنية التحتية والمعدات الأساسية
          ، ليست موجهة نحو حل المشكلات العالمية التي تتطلب التنسيق والتعاون
          والتضامن. كما ذكر بعض النشطاء والعلماء والعاملين في المجال الطبي
          مؤخرًا: "لسنا بحاجة إلى أبطال إذا استعدنا". الأمثلة الواضحة التي ظهرت
          بقوة خاصة في الأشهر القليلة الماضية تشمل عدم القدرة السياسية على تنسيق
          الاستجابات للطوارئ داخل الاتحاد الأوروبي والولايات المتحدة ، والمنافسة
          الحادة بين الدول التي تسعى لشراء المعدات الطبية الأساسية ، وإدراك أننا
          كنا نقوض ظروف عمل "العمال الأساسيين" لعقود. لذلك ، لا يمكن أن يعتمد
          الحافز الاقتصادي الموسع لإعادة تشغيل الاقتصاد خلال / بعد كوفيد -19 على
          استجابة الخط الأول للرأسمالية - إعادة الإنتاج والاستهلاك إلى
          "المعتاد". هذا هو الوقت المناسب لتوسيع وإعادة التفكير في نماذجنا
          الاجتماعية والاقتصادية لتحفيز نهج أكثر استدامة للاستهلاك - لا يقتصر
          على استهلاك سلع وخدمات أكثر استدامة (مثل الحليب العضوي أو عطلة السياحة
          البيئية أو الأخشاب المعتمدة من FSC) ، ولكن أيضًا على استهلاك أقل .
        </Text>
        <Heading m="4">
          نحن بحاجة إلى إعادة التفكير في التنظيم الحالي للاقتصاد العالمي ،
          وإصلاح المؤسسات الاقتصادية والسياسية الوطنية التي تحكمه ، وابتكار
          أشكال جديدة من الحكم والعمل الجماعي داخل الدول وعبر الحدود.
        </Heading>
        <Text fontSize="2xl">
          الرأسمالية المفرطة المعاصرة ، وليس الإنسانية في حد ذاتها ، هي السبب
          الجذري لأزمة الاستدامة العالمية وانتشار الأوبئة - وبالتالي ينبغي أن
          تكون محور العمل. لتحقيق ذلك ، نحتاج إلى نوع مختلف من "دولة ريادة
          الأعمال الخضراء" التي تفصل الاستدامة عن النمو ، وهذا لا يتدخل لإنقاذ
          الصناعات كثيفة الكربون. تراجعت أسواق النفط في الأسابيع الأخيرة ،
          وأسعار النفط صفر دولار (أو حتى السلبية) تخفض من قيمة أصول صناعة النفط
          بشكل كبير. يعني الانتعاش الأخضر والعادل في تحول صناعة النفط التركيز
          على مساعدة العمال أولاً وقبل كل شيء ، بدلاً من المديرين التنفيذيين أو
          المساهمين. قد يستلزم ذلك تأميمًا جزئيًا للأصول لإغلاق صناعة النفط بشكل
          أساسي في المدى المتوسط ​​وفتح الطريق لمزيد من الاستثمار في مصادر
          الطاقة المتجددة ، والتي من شأنها أن تضعف بسبب المنافسة من النفط
          الرخيص. ثانيًا ، ما نحتاجه هو المزيد من المشاركة المجتمعية في الاقتصاد
          ، وإجراء تغييرات في قانون العمل لتسهيل النقابات ، وإصلاحات ضريبية لجعل
          أشكال التنظيم البلدية والتعاونية أكثر جاذبية ، وتنظيم الشركات لتسهيل
          ملكية الموظفين ، ومحفزات لتوسيع الراديكالية والديمقراطية. التجارب
          البيئية الموجودة بالفعل - مثل المجتمعات الحية المشتركة التي نشطت في
          الدنمارك منذ السبعينيات. ثالثًا ، يمكن تقديم رؤى مهمة لخطة التعافي من
          خلال فكرة "الاستدامة العادلة" ، والتي تتضمن "الحاجة إلى ضمان نوعية
          حياة أفضل للجميع ، حاليًا وفي المستقبل ، بطريقة عادلة ومنصفة ، أثناء
          العيش. ضمن حدود النظم البيئية الداعمة. لذلك ، يحتاج المسار نحو التعافي
          خلال وبعد COVID-19 إلى معالجة عدم المساواة - لأنه يدفع الاستهلاك
          التنافسي ويؤدي إلى مستويات أدنى من الثقة في المجتمعات ، مما يجعل العمل
          العام (بما في ذلك تحت الوباء) أكثر صعوبة. يعد استبعاد الشركات من أموال
          الاسترداد التي استخدمت أدوات التهرب الضريبي إحدى الخطوات الضرورية. لكن
          هناك حاجة أكثر من أي وقت مضى إلى إجراءات أوسع وجماعية للقضاء على
          السماوات الضريبية.
        </Text>
        <Heading m="4">
          تقتضي الاستدامة فقط التركيز على تحسين جودة الحياة والرفاهية ، بدلاً من
          النمو
        </Heading>
        <Text fontSize="2xl">
          إنه يتطلب اقتصادًا مجتمعيًا وزيادة الاستهلاك العام ، وليس الخاص. إنه
          ينطوي على تلبية احتياجات كل من الأجيال الحالية والمستقبلية وفي نفس
          الوقت إعادة تصور هذه الاحتياجات. إنه يتطلب نموذجًا للاكتفاء ، بدلاً من
          تعظيم الاستهلاك. وأخيراً ، تقر بأن الاستهلاك المفرط والتدهور البيئي
          يؤثران على الحق في التمتع بنوعية حياة لائقة. تعتبر ضرورات النمو
          والاستهلاك المتزايد باستمرار جزءًا من المشكلة ولا يمكن أن تكون الحل.
          يظل الاهتمام بما نشتريه ونستهلكه ، وكيف تم إنتاجه أمرًا مهمًا ، لكن لا
          يمكننا شراء طريقنا إلى مستقبل مستدام. ستيفانو بونتي أستاذ الاقتصاد
          السياسي الدولي بكلية كوبنهاغن للأعمال ومدير مركز دراسات الأعمال
          والتنمية. أحدث كتاب له بعنوان الأعمال والطاقة والاستدامة في عالم من
          سلاسل القيمة العالمية (Zed ، 2019). تم نشر هذه المقالة لأول مرة في
          مدونة مركز دراسات الأعمال والتنمية التابع لكلية كوبنهاغن للأعمال ، وتم
          إعادة إنتاجها هنا بعد الحصول على إذن.
        </Text>
        <Text fontSize="2xl">
          لقد أوضحت أزمة COVID-19 قيود التفكير والتأهب والسياسة الحالية ليس فقط
          فيما يتعلق بالأوبئة الصحية ولكن أيضًا بتحديات الاستدامة التي نواجهها
          محليًا وعالميًا. الرأسمالية المعاصرة ، بثقافتها الفردية المفرطة ونهجها
          في الوقت المناسب - وليس فقط في حالة - للبنية التحتية والمعدات الأساسية
          ، ليست موجهة نحو حل المشكلات العالمية التي تتطلب التنسيق والتعاون
          والتضامن. كما ذكر بعض النشطاء والعلماء والعاملين في المجال الطبي
          مؤخرًا: "لسنا بحاجة إلى أبطال إذا استعدنا". الأمثلة الواضحة التي ظهرت
          بقوة خاصة في الأشهر القليلة الماضية تشمل عدم القدرة السياسية على تنسيق
          الاستجابات للطوارئ داخل الاتحاد الأوروبي والولايات المتحدة ، والمنافسة
          الحادة بين الدول التي تسعى لشراء المعدات الطبية الأساسية ، وإدراك أننا
          كنا نقوض ظروف عمل "العمال الأساسيين" لعقود. لذلك ، لا يمكن أن يعتمد
          الحافز الاقتصادي الموسع لإعادة تشغيل الاقتصاد خلال / بعد كوفيد -19 على
          استجابة الخط الأول للرأسمالية - إعادة الإنتاج والاستهلاك إلى
          "المعتاد". هذا هو الوقت المناسب لتوسيع وإعادة التفكير في نماذجنا
          الاجتماعية والاقتصادية لتحفيز نهج أكثر استدامة للاستهلاك - لا يقتصر
          على استهلاك سلع وخدمات أكثر استدامة (مثل الحليب العضوي أو عطلة السياحة
          البيئية أو الأخشاب المعتمدة من FSC) ، ولكن أيضًا على استهلاك أقل .
        </Text>
        <Heading m="4">
          نحن بحاجة إلى إعادة التفكير في التنظيم الحالي للاقتصاد العالمي ،
          وإصلاح المؤسسات الاقتصادية والسياسية الوطنية التي تحكمه ، وابتكار
          أشكال جديدة من الحكم والعمل الجماعي داخل الدول وعبر الحدود.
        </Heading>
        <Text fontSize="2xl">
          الرأسمالية المفرطة المعاصرة ، وليس الإنسانية في حد ذاتها ، هي السبب
          الجذري لأزمة الاستدامة العالمية وانتشار الأوبئة - وبالتالي ينبغي أن
          تكون محور العمل. لتحقيق ذلك ، نحتاج إلى نوع مختلف من "دولة ريادة
          الأعمال الخضراء" التي تفصل الاستدامة عن النمو ، وهذا لا يتدخل لإنقاذ
          الصناعات كثيفة الكربون. تراجعت أسواق النفط في الأسابيع الأخيرة ،
          وأسعار النفط صفر دولار (أو حتى السلبية) تخفض من قيمة أصول صناعة النفط
          بشكل كبير. يعني الانتعاش الأخضر والعادل في تحول صناعة النفط التركيز
          على مساعدة العمال أولاً وقبل كل شيء ، بدلاً من المديرين التنفيذيين أو
          المساهمين. قد يستلزم ذلك تأميمًا جزئيًا للأصول لإغلاق صناعة النفط بشكل
          أساسي في المدى المتوسط ​​وفتح الطريق لمزيد من الاستثمار في مصادر
          الطاقة المتجددة ، والتي من شأنها أن تضعف بسبب المنافسة من النفط
          الرخيص. ثانيًا ، ما نحتاجه هو المزيد من المشاركة المجتمعية في الاقتصاد
          ، وإجراء تغييرات في قانون العمل لتسهيل النقابات ، وإصلاحات ضريبية لجعل
          أشكال التنظيم البلدية والتعاونية أكثر جاذبية ، وتنظيم الشركات لتسهيل
          ملكية الموظفين ، ومحفزات لتوسيع الراديكالية والديمقراطية. التجارب
          البيئية الموجودة بالفعل - مثل المجتمعات الحية المشتركة التي نشطت في
          الدنمارك منذ السبعينيات. ثالثًا ، يمكن تقديم رؤى مهمة لخطة التعافي من
          خلال فكرة "الاستدامة العادلة" ، والتي تتضمن "الحاجة إلى ضمان نوعية
          حياة أفضل للجميع ، حاليًا وفي المستقبل ، بطريقة عادلة ومنصفة ، أثناء
          العيش. ضمن حدود النظم البيئية الداعمة. لذلك ، يحتاج المسار نحو التعافي
          خلال وبعد COVID-19 إلى معالجة عدم المساواة - لأنه يدفع الاستهلاك
          التنافسي ويؤدي إلى مستويات أدنى من الثقة في المجتمعات ، مما يجعل العمل
          العام (بما في ذلك تحت الوباء) أكثر صعوبة. يعد استبعاد الشركات من أموال
          الاسترداد التي استخدمت أدوات التهرب الضريبي إحدى الخطوات الضرورية. لكن
          هناك حاجة أكثر من أي وقت مضى إلى إجراءات أوسع وجماعية للقضاء على
          السماوات الضريبية.
        </Text>
        <Heading m="4">
          تقتضي الاستدامة فقط التركيز على تحسين جودة الحياة والرفاهية ، بدلاً من
          النمو
        </Heading>
        <Text fontSize="2xl">
          إنه يتطلب اقتصادًا مجتمعيًا وزيادة الاستهلاك العام ، وليس الخاص. إنه
          ينطوي على تلبية احتياجات كل من الأجيال الحالية والمستقبلية وفي نفس
          الوقت إعادة تصور هذه الاحتياجات. إنه يتطلب نموذجًا للاكتفاء ، بدلاً من
          تعظيم الاستهلاك. وأخيراً ، تقر بأن الاستهلاك المفرط والتدهور البيئي
          يؤثران على الحق في التمتع بنوعية حياة لائقة. تعتبر ضرورات النمو
          والاستهلاك المتزايد باستمرار جزءًا من المشكلة ولا يمكن أن تكون الحل.
          يظل الاهتمام بما نشتريه ونستهلكه ، وكيف تم إنتاجه أمرًا مهمًا ، لكن لا
          يمكننا شراء طريقنا إلى مستقبل مستدام. ستيفانو بونتي أستاذ الاقتصاد
          السياسي الدولي بكلية كوبنهاغن للأعمال ومدير مركز دراسات الأعمال
          والتنمية. أحدث كتاب له بعنوان الأعمال والطاقة والاستدامة في عالم من
          سلاسل القيمة العالمية (Zed ، 2019). تم نشر هذه المقالة لأول مرة في
          مدونة مركز دراسات الأعمال والتنمية التابع لكلية كوبنهاغن للأعمال ، وتم
          إعادة إنتاجها هنا بعد الحصول على إذن.
        </Text>
        <Text fontSize="2xl">
          لقد أوضحت أزمة COVID-19 قيود التفكير والتأهب والسياسة الحالية ليس فقط
          فيما يتعلق بالأوبئة الصحية ولكن أيضًا بتحديات الاستدامة التي نواجهها
          محليًا وعالميًا. الرأسمالية المعاصرة ، بثقافتها الفردية المفرطة ونهجها
          في الوقت المناسب - وليس فقط في حالة - للبنية التحتية والمعدات الأساسية
          ، ليست موجهة نحو حل المشكلات العالمية التي تتطلب التنسيق والتعاون
          والتضامن. كما ذكر بعض النشطاء والعلماء والعاملين في المجال الطبي
          مؤخرًا: "لسنا بحاجة إلى أبطال إذا استعدنا". الأمثلة الواضحة التي ظهرت
          بقوة خاصة في الأشهر القليلة الماضية تشمل عدم القدرة السياسية على تنسيق
          الاستجابات للطوارئ داخل الاتحاد الأوروبي والولايات المتحدة ، والمنافسة
          الحادة بين الدول التي تسعى لشراء المعدات الطبية الأساسية ، وإدراك أننا
          كنا نقوض ظروف عمل "العمال الأساسيين" لعقود. لذلك ، لا يمكن أن يعتمد
          الحافز الاقتصادي الموسع لإعادة تشغيل الاقتصاد خلال / بعد كوفيد -19 على
          استجابة الخط الأول للرأسمالية - إعادة الإنتاج والاستهلاك إلى
          "المعتاد". هذا هو الوقت المناسب لتوسيع وإعادة التفكير في نماذجنا
          الاجتماعية والاقتصادية لتحفيز نهج أكثر استدامة للاستهلاك - لا يقتصر
          على استهلاك سلع وخدمات أكثر استدامة (مثل الحليب العضوي أو عطلة السياحة
          البيئية أو الأخشاب المعتمدة من FSC) ، ولكن أيضًا على استهلاك أقل .
        </Text>
        <Heading m="4">
          نحن بحاجة إلى إعادة التفكير في التنظيم الحالي للاقتصاد العالمي ،
          وإصلاح المؤسسات الاقتصادية والسياسية الوطنية التي تحكمه ، وابتكار
          أشكال جديدة من الحكم والعمل الجماعي داخل الدول وعبر الحدود.
        </Heading>
        <Text fontSize="2xl">
          الرأسمالية المفرطة المعاصرة ، وليس الإنسانية في حد ذاتها ، هي السبب
          الجذري لأزمة الاستدامة العالمية وانتشار الأوبئة - وبالتالي ينبغي أن
          تكون محور العمل. لتحقيق ذلك ، نحتاج إلى نوع مختلف من "دولة ريادة
          الأعمال الخضراء" التي تفصل الاستدامة عن النمو ، وهذا لا يتدخل لإنقاذ
          الصناعات كثيفة الكربون. تراجعت أسواق النفط في الأسابيع الأخيرة ،
          وأسعار النفط صفر دولار (أو حتى السلبية) تخفض من قيمة أصول صناعة النفط
          بشكل كبير. يعني الانتعاش الأخضر والعادل في تحول صناعة النفط التركيز
          على مساعدة العمال أولاً وقبل كل شيء ، بدلاً من المديرين التنفيذيين أو
          المساهمين. قد يستلزم ذلك تأميمًا جزئيًا للأصول لإغلاق صناعة النفط بشكل
          أساسي في المدى المتوسط ​​وفتح الطريق لمزيد من الاستثمار في مصادر
          الطاقة المتجددة ، والتي من شأنها أن تضعف بسبب المنافسة من النفط
          الرخيص. ثانيًا ، ما نحتاجه هو المزيد من المشاركة المجتمعية في الاقتصاد
          ، وإجراء تغييرات في قانون العمل لتسهيل النقابات ، وإصلاحات ضريبية لجعل
          أشكال التنظيم البلدية والتعاونية أكثر جاذبية ، وتنظيم الشركات لتسهيل
          ملكية الموظفين ، ومحفزات لتوسيع الراديكالية والديمقراطية. التجارب
          البيئية الموجودة بالفعل - مثل المجتمعات الحية المشتركة التي نشطت في
          الدنمارك منذ السبعينيات. ثالثًا ، يمكن تقديم رؤى مهمة لخطة التعافي من
          خلال فكرة "الاستدامة العادلة" ، والتي تتضمن "الحاجة إلى ضمان نوعية
          حياة أفضل للجميع ، حاليًا وفي المستقبل ، بطريقة عادلة ومنصفة ، أثناء
          العيش. ضمن حدود النظم البيئية الداعمة. لذلك ، يحتاج المسار نحو التعافي
          خلال وبعد COVID-19 إلى معالجة عدم المساواة - لأنه يدفع الاستهلاك
          التنافسي ويؤدي إلى مستويات أدنى من الثقة في المجتمعات ، مما يجعل العمل
          العام (بما في ذلك تحت الوباء) أكثر صعوبة. يعد استبعاد الشركات من أموال
          الاسترداد التي استخدمت أدوات التهرب الضريبي إحدى الخطوات الضرورية. لكن
          هناك حاجة أكثر من أي وقت مضى إلى إجراءات أوسع وجماعية للقضاء على
          السماوات الضريبية.
        </Text>
        <Heading m="4">
          تقتضي الاستدامة فقط التركيز على تحسين جودة الحياة والرفاهية ، بدلاً من
          النمو
        </Heading>
        <Text fontSize="2xl">
          إنه يتطلب اقتصادًا مجتمعيًا وزيادة الاستهلاك العام ، وليس الخاص. إنه
          ينطوي على تلبية احتياجات كل من الأجيال الحالية والمستقبلية وفي نفس
          الوقت إعادة تصور هذه الاحتياجات. إنه يتطلب نموذجًا للاكتفاء ، بدلاً من
          تعظيم الاستهلاك. وأخيراً ، تقر بأن الاستهلاك المفرط والتدهور البيئي
          يؤثران على الحق في التمتع بنوعية حياة لائقة. تعتبر ضرورات النمو
          والاستهلاك المتزايد باستمرار جزءًا من المشكلة ولا يمكن أن تكون الحل.
          يظل الاهتمام بما نشتريه ونستهلكه ، وكيف تم إنتاجه أمرًا مهمًا ، لكن لا
          يمكننا شراء طريقنا إلى مستقبل مستدام. ستيفانو بونتي أستاذ الاقتصاد
          السياسي الدولي بكلية كوبنهاغن للأعمال ومدير مركز دراسات الأعمال
          والتنمية. أحدث كتاب له بعنوان الأعمال والطاقة والاستدامة في عالم من
          سلاسل القيمة العالمية (Zed ، 2019). تم نشر هذه المقالة لأول مرة في
          مدونة مركز دراسات الأعمال والتنمية التابع لكلية كوبنهاغن للأعمال ، وتم
          إعادة إنتاجها هنا بعد الحصول على إذن.
        </Text>
        <Text fontSize="2xl">
          لقد أوضحت أزمة COVID-19 قيود التفكير والتأهب والسياسة الحالية ليس فقط
          فيما يتعلق بالأوبئة الصحية ولكن أيضًا بتحديات الاستدامة التي نواجهها
          محليًا وعالميًا. الرأسمالية المعاصرة ، بثقافتها الفردية المفرطة ونهجها
          في الوقت المناسب - وليس فقط في حالة - للبنية التحتية والمعدات الأساسية
          ، ليست موجهة نحو حل المشكلات العالمية التي تتطلب التنسيق والتعاون
          والتضامن. كما ذكر بعض النشطاء والعلماء والعاملين في المجال الطبي
          مؤخرًا: "لسنا بحاجة إلى أبطال إذا استعدنا". الأمثلة الواضحة التي ظهرت
          بقوة خاصة في الأشهر القليلة الماضية تشمل عدم القدرة السياسية على تنسيق
          الاستجابات للطوارئ داخل الاتحاد الأوروبي والولايات المتحدة ، والمنافسة
          الحادة بين الدول التي تسعى لشراء المعدات الطبية الأساسية ، وإدراك أننا
          كنا نقوض ظروف عمل "العمال الأساسيين" لعقود. لذلك ، لا يمكن أن يعتمد
          الحافز الاقتصادي الموسع لإعادة تشغيل الاقتصاد خلال / بعد كوفيد -19 على
          استجابة الخط الأول للرأسمالية - إعادة الإنتاج والاستهلاك إلى
          "المعتاد". هذا هو الوقت المناسب لتوسيع وإعادة التفكير في نماذجنا
          الاجتماعية والاقتصادية لتحفيز نهج أكثر استدامة للاستهلاك - لا يقتصر
          على استهلاك سلع وخدمات أكثر استدامة (مثل الحليب العضوي أو عطلة السياحة
          البيئية أو الأخشاب المعتمدة من FSC) ، ولكن أيضًا على استهلاك أقل .
        </Text>
        <Heading m="4">
          نحن بحاجة إلى إعادة التفكير في التنظيم الحالي للاقتصاد العالمي ،
          وإصلاح المؤسسات الاقتصادية والسياسية الوطنية التي تحكمه ، وابتكار
          أشكال جديدة من الحكم والعمل الجماعي داخل الدول وعبر الحدود.
        </Heading>
        <Text fontSize="2xl">
          الرأسمالية المفرطة المعاصرة ، وليس الإنسانية في حد ذاتها ، هي السبب
          الجذري لأزمة الاستدامة العالمية وانتشار الأوبئة - وبالتالي ينبغي أن
          تكون محور العمل. لتحقيق ذلك ، نحتاج إلى نوع مختلف من "دولة ريادة
          الأعمال الخضراء" التي تفصل الاستدامة عن النمو ، وهذا لا يتدخل لإنقاذ
          الصناعات كثيفة الكربون. تراجعت أسواق النفط في الأسابيع الأخيرة ،
          وأسعار النفط صفر دولار (أو حتى السلبية) تخفض من قيمة أصول صناعة النفط
          بشكل كبير. يعني الانتعاش الأخضر والعادل في تحول صناعة النفط التركيز
          على مساعدة العمال أولاً وقبل كل شيء ، بدلاً من المديرين التنفيذيين أو
          المساهمين. قد يستلزم ذلك تأميمًا جزئيًا للأصول لإغلاق صناعة النفط بشكل
          أساسي في المدى المتوسط ​​وفتح الطريق لمزيد من الاستثمار في مصادر
          الطاقة المتجددة ، والتي من شأنها أن تضعف بسبب المنافسة من النفط
          الرخيص. ثانيًا ، ما نحتاجه هو المزيد من المشاركة المجتمعية في الاقتصاد
          ، وإجراء تغييرات في قانون العمل لتسهيل النقابات ، وإصلاحات ضريبية لجعل
          أشكال التنظيم البلدية والتعاونية أكثر جاذبية ، وتنظيم الشركات لتسهيل
          ملكية الموظفين ، ومحفزات لتوسيع الراديكالية والديمقراطية. التجارب
          البيئية الموجودة بالفعل - مثل المجتمعات الحية المشتركة التي نشطت في
          الدنمارك منذ السبعينيات. ثالثًا ، يمكن تقديم رؤى مهمة لخطة التعافي من
          خلال فكرة "الاستدامة العادلة" ، والتي تتضمن "الحاجة إلى ضمان نوعية
          حياة أفضل للجميع ، حاليًا وفي المستقبل ، بطريقة عادلة ومنصفة ، أثناء
          العيش. ضمن حدود النظم البيئية الداعمة. لذلك ، يحتاج المسار نحو التعافي
          خلال وبعد COVID-19 إلى معالجة عدم المساواة - لأنه يدفع الاستهلاك
          التنافسي ويؤدي إلى مستويات أدنى من الثقة في المجتمعات ، مما يجعل العمل
          العام (بما في ذلك تحت الوباء) أكثر صعوبة. يعد استبعاد الشركات من أموال
          الاسترداد التي استخدمت أدوات التهرب الضريبي إحدى الخطوات الضرورية. لكن
          هناك حاجة أكثر من أي وقت مضى إلى إجراءات أوسع وجماعية للقضاء على
          السماوات الضريبية.
        </Text>
        <Heading m="4">
          تقتضي الاستدامة فقط التركيز على تحسين جودة الحياة والرفاهية ، بدلاً من
          النمو
        </Heading>
        <Text fontSize="2xl">
          إنه يتطلب اقتصادًا مجتمعيًا وزيادة الاستهلاك العام ، وليس الخاص. إنه
          ينطوي على تلبية احتياجات كل من الأجيال الحالية والمستقبلية وفي نفس
          الوقت إعادة تصور هذه الاحتياجات. إنه يتطلب نموذجًا للاكتفاء ، بدلاً من
          تعظيم الاستهلاك. وأخيراً ، تقر بأن الاستهلاك المفرط والتدهور البيئي
          يؤثران على الحق في التمتع بنوعية حياة لائقة. تعتبر ضرورات النمو
          والاستهلاك المتزايد باستمرار جزءًا من المشكلة ولا يمكن أن تكون الحل.
          يظل الاهتمام بما نشتريه ونستهلكه ، وكيف تم إنتاجه أمرًا مهمًا ، لكن لا
          يمكننا شراء طريقنا إلى مستقبل مستدام. ستيفانو بونتي أستاذ الاقتصاد
          السياسي الدولي بكلية كوبنهاغن للأعمال ومدير مركز دراسات الأعمال
          والتنمية. أحدث كتاب له بعنوان الأعمال والطاقة والاستدامة في عالم من
          سلاسل القيمة العالمية (Zed ، 2019). تم نشر هذه المقالة لأول مرة في
          مدونة مركز دراسات الأعمال والتنمية التابع لكلية كوبنهاغن للأعمال ، وتم
          إعادة إنتاجها هنا بعد الحصول على إذن.
        </Text>
      </Box>
      <Box bg="#eee" color="black">
        <Heading p="4" size="lg">
          المحتوى ذو الصلة
        </Heading>
      </Box>
      <Carousel
        style={{
          backgroundColor: '#eee',
          color: 'black',
          borderBottom: '1px solid white',
          paddingBottom: 10,
        }}
        itemsToScroll={3}
        itemsToShow={3}
        breakPoints={breakPoints}
      >
        <Box p="8">
          <Text>25.03.20</Text>
          <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
          <Text m="2">
            عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة
            - من مؤلف The Unknowers.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
        </Box>
        <Box p="8">
          <Text>متجر | كتاب الاسبوع</Text>
          <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
          <Text m="2">
            التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم
            ، من مبتكر "A mince عبر الزمن" Queer Tour of London.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
        </Box>
        <Box p="8">
          <Text>25.03.20</Text>
          <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
          <Text m="2">
            عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة
            - من مؤلف The Unknowers.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
        </Box>
        <Box p="8">
          <Text>متجر | كتاب الاسبوع</Text>
          <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
          <Text m="2">
            التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم
            ، من مبتكر "A mince عبر الزمن" Queer Tour of London.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
        </Box>
        <Box p="8">
          <Text>25.03.20</Text>
          <Heading>أفضل 7 كتب للينسي ماكجوي عن الجهل</Heading>
          <Text m="2">
            عالق بالداخل؟ فيما يلي سبع قراءات جيدة عن الجهل والغياب وعدم المعرفة
            - من مؤلف The Unknowers.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/03/zed_blog_linseytop7_featured-640x444.jpg"></Image>
        </Box>
        <Box p="8">
          <Text>متجر | كتاب الاسبوع</Text>
          <Heading>الحرب على المعوقين: ملخص سهل القراءة</Heading>
          <Text m="2">
            التاريخ المثير للشغب لجبهة تحرير المثليين وإرثها لثقافة LGBT + اليوم
            ، من مبتكر "A mince عبر الزمن" Queer Tour of London.
          </Text>
          <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"></Image>
        </Box>
      </Carousel>
    </Box>
  );
}
