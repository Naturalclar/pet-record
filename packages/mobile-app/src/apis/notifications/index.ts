import dayjs from "dayjs";

// Mock methods for fetching notifications
export const fetchNotifications = async () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1687292478056-80a089e0b8b6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4ODg5MTc2Mw&ixlib=rb-4.0.3&q=80&w=300";

  const sampleDatas = [...Array(6)].map((_, index) => ({
    id: `${index}`,
    title: `Sample Title ${index}`,
    description: `Sample description ${index}.`,
    createdAt: dayjs().toISOString(),
    imageUrl,
  }));

  return {
    data: sampleDatas,
  };
};
