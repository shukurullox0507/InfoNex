import { Box, Flex, Title } from "@mantine/core";
// eslint-disable-next-line import/order
import { useAuth } from "modules/auth/context";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";

import video from "../../../../assets/images/video.png";

export default function informations() {
   const { user } = useAuth();

   return (
      <Flex w="100%" gap={30} sx={{ overflow: "hidden" }} p={20}>
         <Box pl={50}>
            <Box>
               <Title color="rgba(0, 106, 255, 1)">Umumiy ma’lumot</Title>
               <Title pt={20} maw="500px" size={18} w={450} sx={{ fontWeight: 500 }}>
                  {user?.about}
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  1-qadam
               </Title>
               <Title size={24}>Kurs mavzusini tanlang.</Title>
               <Title pt={20} size={18} w={420} sx={{ fontWeight: 500 }}>
                  O'zingiz tajribaga ega va yoqtirgan biror-bir mavzu tanlang. InfoNex’da siz tanlagan mavzu bo'yicha talab va raqobatni tushunishga
                  yordam beradigan bir nechta foydali vositalar mavjud.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  2-qadam
               </Title>
               <Title w={430} size={24}>
                  Kurs maqsadingizni va maqsad qilinayotgan auditoriyangizni aniqlab oling.
               </Title>
               <Title pt={20} size={18} w={420} sx={{ fontWeight: 500 }}>
                  Kursingizni yaratishni boshlashdan oldin, siz kimga dars berayotganingizni va kurs tugaguniga qadar o'quvchilaringizni qayerga olib
                  borishni xohlayotganingizni aniqlab olishingiz kerak.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  3-qadam
               </Title>
               <Title w={430} size={24}>
                  Talabalar siz o'rgatayotgan bilimlarni qanday amaliyotda qo'llashlarini aniqlab oling.
               </Title>
               <Title pt={20} size={18} w={430} sx={{ fontWeight: 500 }}>
                  InfoNex o'quvchilari o'zlarining bilimlarini amaliy mashg'ulotlarda qo'llashni yaxshi ko'radilar. Siz kiritishingiz mumkin bo'lgan
                  turli xil amaliyot turlari mavjud, shuning uchun siz o'zingizning mavzuingiz uchun eng yaxshisini tanlab olishingiz kerak.
               </Title>
            </Box>
            <Box pt={20}>
               <Title pb={20} color="rgba(0, 106, 255, 1)">
                  4-qadam
               </Title>
               <Title size={24}>Kursingizning rejasini yarating.</Title>
               <Title pt={20} size={18} w={430} sx={{ fontWeight: 500 }}>
                  Kursingizning rejasi sizning kursingiz uchun asosdir. Kurslar ketma-ketligini rejalashtirib olsangiz, video tayyorlash jarayonida
                  qiyinchiliklarga duch kelmaysiz.
               </Title>
            </Box>
         </Box>
         <Box>
            <img style={{ width: 600 }} src={video} alt="video" />
            <Flex pt={10} justify="space-between">
               <Flex p={15} w={280} bg="rgba(231, 240, 255, 1)" align="center" gap={15} sx={{ borderRadius: 18 }}>
                  <BiSolidPhoneCall size={24} color="rgba(0, 106, 255, 1)" />
                  <Title size={22} color="rgba(0, 106, 255, 1)" sx={{ fontWeight: 500 }}>
                     Admin bilan aloqa
                  </Title>
               </Flex>
               <Flex p={15} w={300} bg="rgba(231, 240, 255, 1)" align="center" gap={15} sx={{ borderRadius: 18 }}>
                  <BsFillInfoSquareFill size={24} color="rgba(0, 106, 255, 1)" />
                  <Title size={22} color="rgba(0, 106, 255, 1)" sx={{ fontWeight: 500 }}>
                     Foydalanish shartlari
                  </Title>
               </Flex>
            </Flex>
         </Box>
      </Flex>
   );
}
